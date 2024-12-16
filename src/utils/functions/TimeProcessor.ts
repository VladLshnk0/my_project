function ConvertMonthToNorwegian(month: string | number): string {
    switch (month) {
        case 1:
            return "Januar";
        case 2:
            return "Februar";
        case 3:
            return "Mars";
        case 4:
            return "April";
        case 5:
            return "Mai";
        case 6:
            return "Juni";
        case 7:
            return "Juli";
        case 8:
            return "August";
        case 9:
            return "September";
        case 10:
            return "Oktober";
        case 11:
            return "November";
        case 12:
            return "Desember";
        default:
            return "Ukjent";
    }
}

export function ConvertDate(date: string): string {
    const year = date.split("-")[0];
    const month = ConvertMonthToNorwegian(+date.split("-")[1]);
    const day = date.split("-")[2];
    return `${day}. ${month} ${year}`;
}