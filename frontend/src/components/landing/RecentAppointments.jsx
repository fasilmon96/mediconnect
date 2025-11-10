import { Calendar, Clock } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { useState } from "react";
import { Toggle } from "../ui/toggle";

function RecentAppointments() {

    const [status, setStatus] = useState("Confirmed");

    const handleToggle = () => {
        setStatus(status === "Confirmed" ? "Completed" : "Confirmed")
    }


    return (
        <div className="bg-black/5 border border-white/10 rounded-md p-6">
            <div className="flex space-x-2 items-center">
                <Calendar className="w-5 h-5 text-primary" />
                <h1 className="text-xl text-white font-medium">Recent Appointments</h1>
            </div>
            <p className="text-gray-400 text-sm mb-8">Monitor and manage all patient appointments</p>

            <div className="flex items-center border border-white/10 rounded-md">
                <Table>
                    <TableHeader>
                        <TableRow className="border-white/10 hover:bg-transparent">
                            <TableHead className={"text-lg text-white font-semibold"}>Patient</TableHead>
                            <TableHead className={"text-lg text-white font-semibold"}>Doctor</TableHead>
                            <TableHead className={"text-lg text-white font-semibold"}>Date & Time</TableHead>
                            <TableHead className={"text-lg text-white font-semibold"}>Reason</TableHead>
                            <TableHead className={"text-lg text-white font-semibold"}>Status</TableHead>
                            <TableHead className={"text-lg text-white font-semibold"}>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow className={"hover:bg-transparent"}>
                            <TableCell>
                                <div>
                                    <h1 className="text-white font-semibold">fasil rahman</h1>
                                    <p className="text-gray-400">fasilrahman96@gmail.com</p>
                                </div>
                            </TableCell>
                            <TableCell> <h1 className="text-white font-semibold">Dr Fasil Rahman</h1></TableCell>
                            <TableCell>
                                <div>
                                    <h1 className="text-white font-semibold">11/06/2025</h1>
                                    <p className="text-gray-400">09:00</p>
                                </div>
                            </TableCell>
                            <TableCell> <h1 className="text-white font-semibold">Emergency Visit</h1></TableCell>
                            <TableCell>
                                <Toggle
                                    pressed={status === "Completed"}
                                    onPressedChange={handleToggle}
                                    className={`rounded-sm h-8 px-3 transition-colors duration-300
                                     data-[state=on]:bg-emerald-700 data-[state=on]:text-white
                                    data-[state=off]:bg-primary/20 data-[state=off]:text-gray-300`}
                                >
                                    {status === "Completed" ? "✅ Completed" : "🕓 Confirmed"}
                                </Toggle>
                            </TableCell>
                            <TableCell> <h1 className="text-gray-400">Click status to toggle</h1></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

            </div>
        </div >
    )
}

export default RecentAppointments




