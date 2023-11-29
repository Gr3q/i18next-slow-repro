import { t, ParseKeys } from 'i18next'

function Workaround(): Extract<ParseKeys<["misc"]>, "misc:24GHz"> {
    return "misc:24GHz";
}

function ReallySlow(): ParseKeys<["misc"]> {
    return "misc:24GHz";
}

t(ReallySlow())
t(Workaround())

