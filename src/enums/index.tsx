export enum EAccountType {
    CLIENT,
    DELIVER,
    RESTAURANT,
}

export enum EOrderState {
    WaitingForApproval,
    Approved,
    WaitingForDelivery,
    Delivered,
}

export enum EDeliveryState {
    Waiting,
    GoingToRestaurant,
    Delivering,
    Delivered
}
