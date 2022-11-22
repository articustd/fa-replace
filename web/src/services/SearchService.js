import _ from 'lodash'

export function find(numEntries) {
    return _.times(numEntries, (num)=>{
        return {title: `Test Title ${num}`, author: "Test Author", tags: ["Test Tag 1", "Test Tag 2", "Test Tag 3"], short_desc: "This is a short description", word_count: 500, published_date: "Nov 20th, 2022"}
    })
}