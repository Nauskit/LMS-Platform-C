import { request, gql } from "graphql-request"

const getCoursesList = async () => {
    const query = gql`
    query Courses {
        courseLists(first: 10, orderBy: createdAt_DESC) {
            id
            name
            banner {
                url
            }
            description
            free
        }
    }`

    const result = await request('https://us-west-2.cdn.hygraph.com/content/cm179x8d4023307ur5cgw1trf/master', query)
    return result;
}

export default getCoursesList