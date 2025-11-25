import { Calendar, Clock } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { Toggle } from "../ui/toggle";
import { useUpdateAppointmentStatus } from "@/hooks/useAppointment";

function RecentAppointments({ totalAppointments }) {

    const { mutate} = useUpdateAppointmentStatus();


    const handleToggle = (id, currentStatus) => {
        const newStatus =
            currentStatus === "CONFIRMED" ? "COMPLETED" : "CONFIRMED";

        mutate({id , status:newStatus});
    };


    return (
        totalAppointments.length > 0 && (
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
                        <TableBody className="border-b border-white/10">
                            {totalAppointments.map((appointment) => (
                                <TableRow key={appointment._id} className={"hover:bg-transparent"}>
                                    <TableCell>
                                        <div>
                                            <h1 className="text-white font-semibold">{appointment?.user?.fullName}</h1>
                                            <p className="text-gray-400">{appointment?.user?.email}</p>
                                        </div>
                                    </TableCell>
                                    <TableCell> <h1 className="text-white font-semibold">{appointment?.doctor?.name}</h1></TableCell>
                                    <TableCell>
                                        <div>
                                            <h1 className="text-white font-semibold">
                                                {new Date(appointment.date).toLocaleDateString("en-In", {
                                                    day: "numeric",
                                                    month: "numeric",
                                                    year: "numeric"
                                                })}
                                            </h1>
                                            <p className="text-gray-400">{appointment.time}</p>
                                        </div>
                                    </TableCell>
                                    <TableCell> <h1 className="text-white font-semibold">Emergency Visit</h1></TableCell>

                                    <TableCell>
                                        <Toggle
                                            pressed={appointment.status === "COMPLETED"}
                                            onPressedChange={() => handleToggle(appointment._id , appointment.status)}
                                            className={`rounded-sm h-8 px-3 transition-colors duration-300
                                     data-[state=on]:bg-emerald-700 data-[state=on]:text-white
                                    data-[state=off]:bg-primary/20 data-[state=off]:text-gray-300`}
                                        >
                                            {appointment.status}
                                        </Toggle>
                                    </TableCell>

                                    <TableCell> <h1 className="text-gray-400">Click status to toggle</h1></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                </div>
            </div >
        )
    )
}

export default RecentAppointments




