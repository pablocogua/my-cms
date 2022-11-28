import {
    buildCollection,
    buildProperty
} from "@camberi/firecms";
import Timesheet from "../entities/Timesheet"

const TimesheetSchema = buildCollection<Timesheet>({
    name: "Timesheets",
    path: "timesheet",
    permissions: ({ authController }) => ({
        edit: true,
        create: true,
        delete: false
    }),
    properties: {
        work_performed_on: {
            name: "Work performed on",
            validation: { required: true },
            dataType: "date"
        },
        contract: {
            name: "Contract",
            validation: { required: true },
            dataType: "string"
        },
        location: {
            name: "Site location",
            validation: { required: true },
            dataType: "string"
        },
        workers: {
            dataType: "array",
            name: "Related products",
            of: {
                dataType: "reference",
                path: "workers"
            }
        },
        files: buildProperty({
            name: "Image",
            dataType: "array",
            storage: {
                storagePath: "images",
                acceptedFiles: ["image/*"]
            }
        })
    }
});

export default TimesheetSchema