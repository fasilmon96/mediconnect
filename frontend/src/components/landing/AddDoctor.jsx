import { Dialog, DialogHeader, DialogContent, DialogDescription, DialogTitle, DialogFooter } from "../ui/dialog"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Select, SelectContent, SelectTrigger, SelectValue , SelectItem} from "../ui/select"
import { Button } from "../ui/button"
import { useAddDoctor } from "@/hooks/useDoctor"
import { useState } from "react"
import { formatMoblie } from "@/lib/utils"

function AddDoctor({ open, close }) {

    const [create, setCreate] = useState({
        name: "",
        speciality: "",
        email: "",
        phone: "",
        bio: "",
        gender: "",
        isActive: true

    })

    const createMutation = useAddDoctor();

    const handlePhoneChange = (value) => {
        const formattedPhoneNumber = formatMoblie(value);
        setCreate({ ...create, phone: formattedPhoneNumber });
    };

    const handleSave = () => {
        createMutation.mutate({ ...create }, { onSuccess: handleClose });
    };

    const handleClose = () => {
        close();
        setCreate({
            name: "",
            speciality: "",
            email: "",
            phone: "",
            bio: "",
            gender: "",
            isActive: true

        });
    }



    return (
        <Dialog open={open} onOpenChange={handleClose}>
            <DialogContent className="sm:max-w-[500px] bg-[#222222] border border-background/20 backdrop-blur-2xl text-white">
                <DialogHeader>
                    <DialogTitle>Add New Doctor</DialogTitle>
                    <DialogDescription>Add a new doctor to your practice.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label>Name *</Label>
                            <Input className={" placeholder:text-white/40"}
                                value={create.name}
                                onChange={(e) => setCreate({ ...create, name: e.target.value })}
                                placeholder="Dr. Fasil Rahman"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Speciality *</Label>
                            <Input className={"placeholder:text-white/40"}
                                value={create.speciality}
                                onChange={(e) => setCreate({ ...create, speciality: e.target.value })}
                                placeholder="General Dentistry"

                            />
                        </div>
                    </div>
                </div>
                <div className="space-y-2">
                    <Label>Email *</Label>
                    <Input className={"placeholder:text-white/40"}
                        value={create.email}
                        onChange={(e) => setCreate({ ...create, email: e.target.value })}
                        placeholder="doctor@exaomle.com"
                    />
                </div>
                <div className="space-y-2">
                    <Label>Phone *</Label>
                    <Input className={"placeholder:text-white/40"}
                        value={create.phone}
                        onChange={(e) => handlePhoneChange(e.target.value)}
                        placeholder="(+91) 12345-67890"
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label>Gender</Label>
                        <Select
                            value={create.gender}
                            onValueChange={(value) => setCreate({ ...create, gender: value })}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select gender" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Female">Female</SelectItem>
                                <SelectItem value="Male">Male</SelectItem>
                            </SelectContent>
                        </Select>

                    </div>
                    <div className="space-y-2">
                        <Label>Status</Label>
                        <Select
                            value={create.isActive ? "active" : "inactive"}
                            onValueChange={(value) =>
                                setCreate({ ...create, isActive: value === "active" })
                            }
                        >
                            <SelectTrigger>
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="active">Active</SelectItem>
                                <SelectItem value="inactive">Inactive</SelectItem>
                            </SelectContent>
                        </Select>

                    </div>
                </div>
                <DialogFooter>
                    <Button variant="outline" onClick={handleClose}>
                        Cancel
                    </Button>

                    <Button
                        onClick={handleSave}
                        className="bg-primary hover:bg-primary/90"
                        disabled={
                            !create.name ||
                            !create.email ||
                            !create.speciality ||
                            createMutation.isPending
                        }
                    >
                        {createMutation.isPending ? "Adding..." : "Add Doctor"}
                    </Button>
                </DialogFooter>
            </DialogContent>

        </Dialog>
    )
}

export default AddDoctor





