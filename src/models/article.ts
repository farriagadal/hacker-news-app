export default class Article {
  author: string
  storyTitle: string
  storyUrl: string
  createdAt: string
  objectID: string

  constructor (data: any) {
    this.author = data.author || ''
    this.storyTitle = data.story_title || data.storyTitle || ''
    this.storyUrl = data.story_url || data.storyUrl || ''
    this.createdAt = data.created_at || data.createdAt || ''
    this.objectID = data.objectID || ''
  }
}
