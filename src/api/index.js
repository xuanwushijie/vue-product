import ajax from './ajax'

export const reqHeadCateList = () => ajax('/headCateList')
export const reqFocusList = () => ajax('/focusList')
export const reqTagList= () => ajax('/tagList')
export const reqNewItemList = () => ajax('/newItemList')
export const reqPopularItemList = () => ajax('/popularItemList')
export const reqFlashSaleIndexVO = () => ajax('/flashSaleIndexVO')
export const reqTopicList = () => ajax('/topicList')
export const reqCateList = () => ajax('/cateList')

export const reqBanner = () => ajax('/banner')
