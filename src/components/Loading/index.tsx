import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { LoadingAnimation } from './styles'

export function Loading() {
  return <LoadingAnimation icon={faSpinner} />
}
