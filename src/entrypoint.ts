import type { Alpine } from 'alpinejs'
import intersect from '@alpinejs/intersect'
import anchor from '@alpinejs/anchor'

export default (Alpine: Alpine) => {
    Alpine.plugin(intersect)
    Alpine.plugin(anchor)
}
