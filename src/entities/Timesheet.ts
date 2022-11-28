import { EntityReference } from "@camberi/firecms";

type Timesheet = {
    work_performed_on: Date;
    contract: string;
    location: string;
    workers: EntityReference[];
    files: string[];
}

export default Timesheet