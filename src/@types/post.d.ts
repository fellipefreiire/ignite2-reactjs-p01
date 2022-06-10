interface Author {
  name: string
  role: string
  avatarUrl
}

interface Content {
  type: string
  content: string
}

interface PostProps {
  author: Author
  content: Content[]
  publishedAt: Date
}