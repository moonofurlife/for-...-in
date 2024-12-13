function getValues(obj, sort_param) {
    const keys_obj = Object.keys(obj).sort()
    console.log(keys_obj)
    delete keys_obj[0]
    console.log(keys_obj)
    const ans = []
    for (const key in obj) {
        console.log(key)
    }
}
const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40}
getValues(obj, ["level"])