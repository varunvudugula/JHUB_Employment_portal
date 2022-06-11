export class Job {
    constructor(
        public jobid:string,
        public jobrole:string,
        public description:string,
        public organisation:string,
        public location:string,
        public requiredskills:string,
        public date:string,
        public expired:boolean
    ){}
}
