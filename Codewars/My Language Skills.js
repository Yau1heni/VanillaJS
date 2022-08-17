function myLanguages(results) {
    return Object.keys(results).filter(a=>results[a] >= 60).sort((a, b) => results[b] - results[a])
    }