export default function joinAttributes(data, joinCharacter = '&') {
    return Object.keys(data)?.map(key => `${key}=${data[key]}`).join(joinCharacter);
}
