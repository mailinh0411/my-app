export interface Book {
    id: number;
    name: string;
    purchaseDate: string;
    status: string;
};

enum EnumStatus {
    DADOC = "Đã đọc",
    CHUADOC = "Chưa đọc"
}

export var Books: Book[] = [
    {id: 1, name: "De men phieu luu ky", purchaseDate:"2023-07-03", status: EnumStatus.DADOC},
    {id: 2, name: "Hat giong tam hon", purchaseDate:"2023-06-23", status: EnumStatus.CHUADOC},
    {id: 3, name: "Mat biec", purchaseDate:"2023-07-11", status: EnumStatus.DADOC},
    {id: 4, name: "Toi thay hoa vang tren co xanh", purchaseDate:"2023-05-05", status: EnumStatus.DADOC},
    {id: 5, name: "Cuon theo chieu gio", purchaseDate:"2023-06-19", status: EnumStatus.CHUADOC},
];