import { Dialog, DialogHeader, DialogContent, DialogDescription, DialogTitle, DialogFooter } from "../ui/dialog"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Select, SelectContent, SelectTrigger, SelectValue, SelectItem } from "../ui/select"
import { Button } from "../ui/button"
import { useState } from "react"
import { formatMoblie } from "@/lib/utils"
import { useUpdateDoctor } from "@/hooks/useDoctor"

function EditDoctor({ openEdit,data, closeEdit }) {

    const [editForm, setEditForm] = useState({
        id : data.id,
        name: data.name,
        speciality: data.speciality,
        email: data.email,
        phone: data.phone ,
        gender: data.gender,
        isActive : data.isActive
    })

    const updateMutation = useUpdateDoctor();

    const handlePhoneChange = (value) => {
        const formattedPhoneNumber = formatMoblie(value);
        setEditForm({ ...editForm, phone: formattedPhoneNumber });
    };

    const handleSave = () => {
        updateMutation.mutate({ ...editForm ,}, { onSuccess: handleClose });
    };

    const handleClose = () => {
        closeEdit();
        setEditForm({
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
        <Dialog open={openEdit} onOpenChange={handleClose}>
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
                                value={editForm.name}
                                onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                                placeholder="Dr. Fasil Rahman"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Speciality *</Label>
                            <Input className={"placeholder:text-white/40"}
                                value={editForm.speciality}
                                onChange={(e) => setEditForm({ ...editForm, speciality: e.target.value })}
                                placeholder="General Dentistry"

                            />
                        </div>
                    </div>
                </div>
                <div className="space-y-2">
                    <Label>Email *</Label>
                    <Input className={"placeholder:text-white/40"}
                        value={editForm.email}
                        onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                        placeholder="doctor@exaomle.com"
                    />
                </div>
                <div className="space-y-2">
                    <Label>Phone *</Label>
                    <Input className={"placeholder:text-white/40"}
                        value={editForm.phone}
                        onChange={(e) => handlePhoneChange(e.target.value)}
                        placeholder="(+91) 12345-67890"
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label>Gender</Label>
                        <Select
                            value={editForm.gender}
                            onValueChange={(value) => setEditForm({ ...editForm, gender: value })}
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
                            value={editForm.isActive ? "active" : "inactive"}
                            onValueChange={(value) =>
                                setEditForm({ ...editForm, isActive: value === "active" })
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
                            !editForm.name ||
                            !editForm.email ||
                            !editForm.speciality ||
                            updateMutation.isPending
                        }
                    >
                        { updateMutation.isPending ? "Added" : "Add Doctor"}
                    </Button>
                </DialogFooter>
            </DialogContent>

        </Dialog>
    )
}

export default EditDoctor





