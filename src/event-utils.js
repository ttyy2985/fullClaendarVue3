let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: '精品廣告案',
    start: todayStr,
    bgColor: 'red',
    bu: '廣告部',
    time: '14:00',
  },
  {
    id: createEventId(),
    title: '內廣文章推播案',
    start: todayStr,
    bgColor: 'yellow',
    bu: '編輯部',
    time: '15:00',
  },
]

export function createEventId() {
  return String(eventGuid++)
}
