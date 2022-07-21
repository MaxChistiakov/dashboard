import {addFilter, clearFilter, removeFilter} from "../filters/filters-actions"
import {filterReducer} from '../filters/filters-reducer'
import {selectAllFilters} from '../filters/filters-selectors'

describe('filterReducer', () => {
    it("should return default state when passed an empty action", () => {
        const result = filterReducer(undefined, {type: ''});

        expect(result).toEqual([])
    })
})

describe('filterActions', () => {
    it('should add filter with "addFilter" action', () => {
        const action = {type: addFilter().type, filter: "Fullstack"}

        const result = filterReducer([], action)

        expect(result).toEqual(["Fullstack"])
    })

    it('should remove filter with "removeFilter" action', () => {
        const action = {type: removeFilter().type, filter: "Fullstack"};

        const mockState = ["Frontend", "Fullstack", "Backend"]

        const result = filterReducer(mockState, action);

        expect(result).toEqual(["Frontend", "Backend"])
    })

    it('should clear filters with "clearFilter" action', () => {
        const action = {type: clearFilter.type}

        const mockState = ["Frontend", "Fullstack", "Backend"]

        const result = filterReducer(mockState, action);

        expect(result).toEqual([])
    })
})

describe('filterSelector', () => {
    it('should return filter from state with "selectAllFilters" selector', () => {
        const mockState = {
            positions: ["Frontend", "Fullstack"],
            filters: ["Sass", "Backend", "Junior"]
        }

        const result = selectAllFilters(mockState)

        expect(result).toEqual(["Sass", "Backend", "Junior"])
    })
})