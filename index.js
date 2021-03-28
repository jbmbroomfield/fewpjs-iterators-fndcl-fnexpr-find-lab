function superbowlWin(record) {
    const r = record.find(entry => entry.result === 'W')
    return r ? r.year : undefined
}