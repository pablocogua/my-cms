import { buildCollection } from "@camberi/firecms";
import Worker from "../entities/Worker"

const WorkerSchema = buildCollection<Worker>({
    name: "Workers",
    singularName: "Worker",
    path: "workers",
    permissions: ({ authController }) => ({
        edit: true,
        create: true,
        delete: false
    }),
    properties: {
        name: {
            name: "Name",
            validation: { required: true },
            dataType: "string"
        },
        worked_hours: {
            name: "Worked hours",
            validation: { required: true },
            dataType: "number"
        }
    }
});

export default WorkerSchema