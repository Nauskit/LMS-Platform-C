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
            slug
        }
    }`

  const result = await request('https://us-west-2.cdn.hygraph.com/content/cm179x8d4023307ur5cgw1trf/master', query)
  return result;


}
const getSideBanner = async () => {
  const query = gql`
    query GetSideBanner {
        sideBanners {
          id
          name
          banner {
            id
            url
          }
          url
        }
      }`
  const result = await request('https://us-west-2.cdn.hygraph.com/content/cm179x8d4023307ur5cgw1trf/master', query)
  return result;
}

const getCourseById = async (courseId) => {
  const query = gql`query MyQuery {
    courseList(where: {slug: "`+ courseId + `"}) {
      banner {
        url
      }
      chapter {
        ... on Chapter {
          id
          name
          video {
            url
          }
        }
      }
      description
      free
      id
      name
      slug
      totalChapter
    }
  }`
  const result = await request('https://us-west-2.cdn.hygraph.com/content/cm179x8d4023307ur5cgw1trf/master', query)
  return result;
}

export default { getCoursesList, getSideBanner, getCourseById }
