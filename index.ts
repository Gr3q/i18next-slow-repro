import { t, ParseKeys } from 'i18next'

function Workaround(): Extract<ParseKeys<["misc"]>, "misc:24GHz"> {
    return "misc:24GHz";
}

function NotSlowAnymore(): ParseKeys<["misc"]> {
    return "misc:24GHz";
}

function NotSlowOrdinal(): ParseKeys<["misc"], { ordinal: true }> {
    return "misc:24GHz";
}

function NotSlowCount(): ParseKeys<["misc"], { count: 2 }> {
    return "misc:24GHz";
}

t(NotSlowOrdinal(), { ordinal: true })
t(NotSlowCount(), { ordinal: true })
t(NotSlowOrdinal(), { count: 3 })
t(NotSlowCount(), { count: 3 })
// With 23.7.13
t(NotSlowAnymore(), { count: 1 })
t(NotSlowAnymore(), { ordinal: true })
t(NotSlowAnymore())
t(Workaround())

