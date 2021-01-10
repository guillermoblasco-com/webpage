const months = [
    'Jan','Feb','Mar','Apr','May','Jun',
    'Jul','Aug','Sep','Oct','Nov','Dec',
]
export const toBlogDate = (date:string|Date):string => {
    date = new Date(date);
    return `${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`;
}
