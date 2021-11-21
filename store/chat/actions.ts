export default {

	setNameAndReturnIt( { commit }: any, name: string){
		commit('SET_NAME', name)
		return name
	}
}