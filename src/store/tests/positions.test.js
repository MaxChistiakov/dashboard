import { positionReducer } from "store/positions/position-reducer";
import { addPositions } from "store/positions/position-actions";
import {selectVisiblePositions} from "store/positions/position-selector"

describe('positionReducer', () => {
    it('should return default state when passed an empty action', () => {
        const result = positionReducer(undefined, {type: ''});

        expect(result).toEqual([])
    })
})

describe('positionAction', () => {
    it('should add positions with "addPositions" action', () => {
        const action = {type: addPositions().type, positions: ['first', 'second', 'third']}
        
        const result = positionReducer([], action)

        expect(result.length).toBe(3)
        expect(result[1]).toEqual('second')
    })
})

describe('positionSelectors', () => {
    it('should select positions from state', () => {
        const mockData = {
            positions: ["Senior Frontend Developer", "Fullstack Developer", "Junior Frontend Developer", "Software Engineer"],
            roles: ['Frontend', 'Fullstack']
        }

        const result = selectVisiblePositions(mockData, [])

        expect(result).toEqual(["Senior Frontend Developer", "Fullstack Developer", "Junior Frontend Developer", "Software Engineer"])
    })
    const mockState = {
            positions: [
                {
                  "id": 1,
                  "role": "Frontend",
                  "level": "Senior",
                  "languages": ["HTML", "CSS", "JavaScript"],
                  "tools": []
                },
                {
                  "id": 2,
                  "role": "Fullstack",
                  "level": "Midweight",
                  "languages": ["Python"],
                  "tools": ["React"]
                },
                {
                  "id": 3,
                  "role": "Frontend",
                  "level": "Junior",
                  "languages": ["JavaScript"],
                  "tools": ["React", "Sass"]
                },
                {
                  "id": 4,
                  "role": "Frontend",
                  "level": "Junior",
                  "languages": ["CSS", "JavaScript"],
                  "tools": []
                },
                {
                  "id": 5,
                  "role": "Fullstack",
                  "level": "Midweight",
                  "languages": ["JavaScript"],
                  "tools": ["Ruby", "Sass"]
                },
                {
                  "id": 6,
                  "role": "Backend",
                  "level": "Junior",
                  "languages": ["Ruby"],
                  "tools": ["RoR"]
                },
                {
                  "id": 7,
                  "role": "Frontend",
                  "level": "Junior",
                  "languages": ["HTML", "JavaScript"],
                  "tools": ["Sass"]
                },
                {
                  "id": 8,
                  "role": "Frontend",
                  "level": "Junior",
                  "languages": ["JavaScript"],
                  "tools": ["Vue", "Sass"]
                },
                {
                  "id": 9,
                  "role": "Fullstack",
                  "level": "Midweight",
                  "languages": ["JavaScript", "Python"],
                  "tools": ["Django"]
                },
                {
                  "id": 10,
                  "role": "Frontend",
                  "level": "Junior",
                  "languages": ["JavaScript"],
                  "tools": ["React", "Sass"]
                }
            ]
        }
    it('should select filtered positions by level', () => {
        const resultFilterLevel = selectVisiblePositions(mockState, ['Junior'])

        expect(resultFilterLevel).toEqual([{
            "id": 3,
            "role": "Frontend",
            "level": "Junior",
            "languages": ["JavaScript"],
            "tools": ["React", "Sass"]
          },
          {
            "id": 4,
            "role": "Frontend",
            "level": "Junior",
            "languages": ["CSS", "JavaScript"],
            "tools": []
          },
          {
            "id": 6,
            "role": "Backend",
            "level": "Junior",
            "languages": ["Ruby"],
            "tools": ["RoR"]
          },
          {
            "id": 7,
            "role": "Frontend",
            "level": "Junior",
            "languages": ["HTML", "JavaScript"],
            "tools": ["Sass"]
          },
          {
            "id": 8,
            "role": "Frontend",
            "level": "Junior",
            "languages": ["JavaScript"],
            "tools": ["Vue", "Sass"]
          },
          {
            "id": 10,
            "role": "Frontend",
            "level": "Junior",
            "languages": ["JavaScript"],
            "tools": ["React", "Sass"]
          }])
    })
    it('should select filtered positions by role', () => {
        const resultFilterRole = selectVisiblePositions(mockState, ['Frontend'])

        expect(resultFilterRole).toEqual([{
            "id": 1,
            "role": "Frontend",
            "level": "Senior",
            "languages": ["HTML", "CSS", "JavaScript"],
            "tools": []
          },
          {
            "id": 3,
            "role": "Frontend",
            "level": "Junior",
            "languages": ["JavaScript"],
            "tools": ["React", "Sass"]
          },
          {
            "id": 4,
            "role": "Frontend",
            "level": "Junior",
            "languages": ["CSS", "JavaScript"],
            "tools": []
          },
          {
            "id": 7,
            "role": "Frontend",
            "level": "Junior",
            "languages": ["HTML", "JavaScript"],
            "tools": ["Sass"]
          },
          {
            "id": 8,
            "role": "Frontend",
            "level": "Junior",
            "languages": ["JavaScript"],
            "tools": ["Vue", "Sass"]
          },
          {
            "id": 10,
            "role": "Frontend",
            "level": "Junior",
            "languages": ["JavaScript"],
            "tools": ["React", "Sass"]
          }
        ])
    })

    it('should select filtered positions by language', () => {
        const resultFilterLanguage = selectVisiblePositions(mockState, ['Python'])

        expect(resultFilterLanguage).toEqual([{
            "id": 2,
            "role": "Fullstack",
            "level": "Midweight",
            "languages": ["Python"],
            "tools": ["React"]
          },
          {
            "id": 9,
            "role": "Fullstack",
            "level": "Midweight",
            "languages": ["JavaScript", "Python"],
            "tools": ["Django"]
          }
        ])
    })

    it('should select filtered positions by tools', () => {
        const resultFilterTools = selectVisiblePositions(mockState, ['React', 'Sass'])

        expect(resultFilterTools).toEqual([{
            "id": 3,
            "role": "Frontend",
            "level": "Junior",
            "languages": ["JavaScript"],
            "tools": ["React", "Sass"]
          },
          {
            "id": 10,
            "role": "Frontend",
            "level": "Junior",
            "languages": ["JavaScript"],
            "tools": ["React", "Sass"]
          }
        ])
    })
})