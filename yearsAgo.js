export default function yearsAgo(year){
    return new Date().getFullYear() - year;
    }
    console.log(yearsAgo("2023"))