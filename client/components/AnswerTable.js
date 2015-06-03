import React, { Component } from 'react'
import { parties } from '../data'
import clickFn from '../lib/clickFn'
import { positions as posLabel } from '../lib/labels'

require('./AnswerTable.scss')

export default class AnswerTable extends Component {
  static get displayName () { return "AnswerTable" }

  displayAnswer (answer) {
    alert(answer.body)
  }

  render() {
    const answers = this.props.answers
    return (
      <table className='AnswerTable'>
        <tbody>
          {answers.map(answer => {
            const party = parties.find(p => p.id === answer.party_id)
            return (
              <tr key={answer.id}>
                <td className={`list ${cssClass(party.list)}`} style={{backgroundColor: party.color}}>
                  <a href='' onClick={clickFn(this, 'displayAnswer', answer).bind(this)}>
                    {party.list}
                  </a>
                </td>
                <td className={`position ${answer.position}`}>
                  <a href='' onClick={clickFn(this, 'displayAnswer', answer).bind(this)}>
                    {posLabel(answer.position)}
                  </a>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
}

function cssClass(list) {
  const specials = {'æ': 'ae', 'ø': 'oe', 'å': 'aa'}
  if (Object.keys(specials).indexOf(list) > -1)
    return specials[list]
  return list
}