class Teacher {
    constructor(
        public fullName: string,
        public position: string,
        public year: string,
        public experience: string,
        public education: string,
        public teachHours: string,
        public concertHours: string,
        public teachRank?: string,
        public additionalPositions?: string,
        public addTeachHours?: string,
        public addConcertHours?: string
    ) {}
}
