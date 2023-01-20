export class Model {
    static formatAverageScore(data) {
        return {
            id: data.id,
            keyData: data.keyData,
            score: data.score || data.todayScore,
            userInfos: data.userInfos
        }
    }
}