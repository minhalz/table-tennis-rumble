import { defineStore } from 'pinia'
import { getRandomNumber, getRule, sayLine } from '@/utils'
const useGameStore = defineStore(
    'game',
    () => {
        const players = ref([
            {
                name: 'Red',
                points: 0,
                rule: getRule(),
            },
            {
                name: 'Blue',
                points: 0,
                rule: getRule(),
            },
        ])
        const servingPlayer = ref(getRandomNumber(0, 1))
        const nonServingPlayer = computed(() => {
            return servingPlayer.value === 0 ? 1 : 0
        })
        const pointsToWin = ref(11)
        const servesPerPlayerPref = ref(2)
        const servesPerPlayer = ref(servesPerPlayerPref.value)
        const servesLeft = ref(servesPerPlayerPref.value)
        const winner = ref(null)

        const scoreLine = computed(() => {
            const serverLine = players.value[servingPlayer.value].name + ' ' + players.value[servingPlayer.value].points
            const otherLine =
                players.value[nonServingPlayer.value].name + ' ' + players.value[nonServingPlayer.value].points
            return serverLine + ' ' + otherLine
        })

        watch(servesPerPlayerPref, () => {
            servesPerPlayer.value = servesPerPlayerPref.value
            servesLeft.value = servesPerPlayerPref.value
        })

        function addPoint(player) {
            players.value[player].points += 1
            incrementGame()
        }

        function incrementGame() {
            newRules()
            checkTieBreaker()
            checkServe()
            checkWin()
            sayGameLines()
        }

        function newRules() {
            players.value[0].rule = getRule()
            players.value[1].rule = getRule()
        }

        function checkTieBreaker() {
            servesLeft.value -= 1
            if (
                players.value[0].points === pointsToWin.value - 1 &&
                players.value[1].points === pointsToWin.value - 1
            ) {
                servesPerPlayer.value = 1
            }
        }

        function checkServe() {
            if (servesLeft.value === 0) {
                servesLeft.value = servesPerPlayer.value
                switch (servingPlayer.value) {
                    case 0:
                        servingPlayer.value = 1
                        break
                    default:
                        servingPlayer.value = 0
                        break
                }
            }
        }

        const player1Points = computed(() => {
            return players.value[0].points
        })
        const player2Points = computed(() => {
            return players.value[1].points
        })
        const player1Difference = computed(() => {
            return player1Points.value - player2Points.value
        })
        const player2Difference = computed(() => {
            return player2Points.value - player1Points.value
        })

        function checkWin() {
            switch (servesPerPlayer.value) {
                case 1:
                    if (player1Difference.value > 1 && player1Points.value > pointsToWin.value - 1) {
                        winner.value = 0
                    } else if (player2Difference.value > 1 && player2Points.value > pointsToWin.value - 1) {
                        winner.value = 1
                    }
                    break
                default:
                    if (player1Difference.value > 1 && player1Points.value === pointsToWin.value) {
                        winner.value = 0
                    } else if (player2Difference.value > 1 && player2Points.value === pointsToWin.value) {
                        winner.value = 1
                    }
                    break
            }
        }

        function sayGameLines() {
            if (winner.value !== null) {
                sayLine(players.value[winner.value].name + ' wins')
            } else {
                if (servesLeft.value === servesPerPlayer.value) {
                    sayLine('Change serve')
                }
                sayLine(scoreLine.value)
                checkMatchPoint()
            }
        }

        function checkMatchPoint() {
            switch (servesPerPlayer.value) {
                case 1:
                    if (player1Difference.value > 0 && player1Points.value > pointsToWin.value - 2) {
                        sayMatchPoint(0)
                    } else if (player2Difference.value > 0 && player2Points.value > pointsToWin.value - 2) {
                        sayMatchPoint(1)
                    }
                    break
                default:
                    if (player1Difference.value > 0 && player1Points.value === pointsToWin.value - 1) {
                        sayMatchPoint(0)
                    } else if (player2Difference.value > 0 && player2Points.value === pointsToWin.value - 1) {
                        sayMatchPoint(1)
                    }
                    break
            }
        }

        function sayMatchPoint(index) {
            sayLine(players.value[index].name + ' match point')
        }

        function reset() {
            sayLine('Game reset')
            players.value[0].points = 0
            players.value[1].points = 0
            servingPlayer.value = getRandomNumber(0, 1)
            servesPerPlayer.value = servesPerPlayerPref.value
            servesLeft.value = servesPerPlayerPref.value
            winner.value = null
            newRules()
        }

        return {
            players,
            pointsToWin,
            servesPerPlayerPref,
            servesPerPlayer,
            servingPlayer,
            servesLeft,
            addPoint,
            reset,
            winner,
        }
    },
    {
        persist: true,
    }
)

export default useGameStore
