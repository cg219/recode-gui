import AnimeList from "./anime-list.js"

export default {
    data() {
        return {
            newEpisode: {
                video: "",
                season: "",
                episode: "",
                newepisode: ""
            }
        }
    },
    components: {
        AnimeList
    },
    props: {
        title: String,
        list: Array,
        rootdir: String
    },
    template: "#new-episode",
    methods: {
        async addNewEpisode() {
            const data = new FormData()

            data.append("video", this.newEpisode.video, this.newEpisode.video.name)
            data.append("season", this.newEpisode.season)
            data.append("episode", this.newEpisode.episode)
            data.append("newepisode", this.newEpisode.newepisode)

            await fetch("/newepisode",  {
                method: "POST",
                body: data
            })
        },
        handleVideoFile(e) {
            this.newEpisode.video = e.target.files[0]
        },
        handleSelectUpdate(v) {
            this.newEpisode.newepisode = v
        }
    },

}
