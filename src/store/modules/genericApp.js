
export default {
    state: {
        mobileAppUsersData: {
            "churchAppBackgroundColor": "string",
            "services": "string",
            "pastors": [
              {
                "name": "string",
                "bio": "string",
                "level": "string",
                "branch": "string",
                "socialMedia": [
                  {
                    "name": "string",
                    "profileUrl": "string"
                  }
                ]
              }
            ],
            "customAbouts": [
              {
                "title": "string",
                "details": "string",
                "order": 0
              }
            ],
            "banks": [
              {
                "bankName": "string",
                "accountName": "string",
                "accountNumber": "string",
                "bankLogoUrl": "string"
              }
            ],
          },
          formData: {}
    },

    mutations: {
        setChurchProfileData(state, payload) {
            // state.mobileAppUsersData.pastors = payload.pastors;
            state.formData = new FormData()
            state.formData.append("churchName", payload.name)
            state.formData.append("address", payload.address)
            state.formData.append("phoneNumber", payload.phoneNumber)
        },

        setSocialMediaData(state, payload) {
            state.mobileAppUsersData.socials = payload.socials;
        },
    },

    actions: {
        setChurchProfileData({ commit }, payload) {
          commit("setChurchProfileData", payload)
        },

        setSocialMediaData({ commit }, payload) {
          commit("setSocialMediaData", payload)
        },
    },

    getters: {
        mobileAppUsersData: state => state.mobileAppUsersData,
    },
}