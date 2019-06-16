export interface EventDetails {
    Id : number;
    StartDate : string;
    EndDate : string;
    StartTime : string;
    EndTime : string;
    Description : string;
    Notes? :  string;
    SortOrder : number;
    Type : string;
    House : string;
    Category: string;
    Location? : string;
    LocationMetadata? : string; 
    HasSpeakers : boolean;
    Committee? : string;
    Tags : any[];
    Members : any[];
    Metadata : any[];
    SummarisedDetails : string;
}
  