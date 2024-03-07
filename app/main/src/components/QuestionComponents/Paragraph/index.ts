import Component from "./Component"
import PropComponent from "./PropComponent"
import { QuestionParagraphDefaultProps } from "./interface"
export * from './interface'

export default {
  title: "段落",
  type: "QuestionParagraph",

  Component,
  PropComponent,
  defaultProps: QuestionParagraphDefaultProps
}
