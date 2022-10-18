interface TrackProps {
	watchers?: number
	recommendations?: number
	played_times?: number
	watched_times?: number
}

class Track {
	watchers: number | null
	recommendations: number | null
	played_times: number | null
	watched_times: number | null
	constructor(track: TrackProps) {
		this.watchers = track.watchers || null
		this.recommendations = track.recommendations || null
		this.played_times = track.played_times || null
		this.watched_times = track.watched_times || null
	}
}

export default Track
