export class INotificationDataError{
    Response: string
    Error: string  
}

export class INotificationDataInfo{ 
    Response: string
    Text: string  
}

export class INotificationError extends INotificationDataError{ 
    isError: boolean 
}

export class INotificationInfo extends INotificationDataInfo{ 
    isError: boolean 
}