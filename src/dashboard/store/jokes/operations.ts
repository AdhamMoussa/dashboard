import axios from 'axios'

import { ThunkActionType } from 'core/store'

import { start_getJokes, Joke, success_getJokes, fail_getJokes } from '.'

export const fetchJokes = (): ThunkActionType => async (dispatch) => {
  dispatch(start_getJokes())

  try {
    const { data } = await axios.get<Joke[]>(
      'https://official-joke-api.appspot.com/random_ten'
    )

    dispatch(success_getJokes(data))
  } catch (error) {
    dispatch(fail_getJokes(error.message))
  }
}
