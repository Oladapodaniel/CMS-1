<template>
  <div>
    <!-- BT MODAL -->
    <div class="container-fluid">
      <div class="row">
        <div class="modal-body">
          <div class="container-fluid">
            <div class="row my-3">
              <div class="col-md-4 text-md-right">
                Account Type <span class="text-danger">*</span>
              </div>
              <div class="col-md-7">
                <div class="dropdown">
                  <button
                    class="btn btn-white w-100 border text-left"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {{
                      !selectedAccountType || !selectedAccountType.account
                        ? "Select account type"
                        : selectedAccountType.account
                    }}
                  </button>
                  <div
                    class="dropdown-menu w-100"
                    style="max-height: 300px; overflow: auto"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <div class="container">
                      <div
                        class="row"
                        v-for="(accounts, index) in transactionalAccounts"
                        :key="index"
                      >
                        <div class="col-md-12 px-2">
                          <h6
                            class="mb-0 text-capitalize font-weight-bold"
                            v-if="accounts.length > 0"
                          >
                            {{ accountTypes[index] }}
                          </h6>
                        </div>
                        <div class="col-md-12">
                          <a
                            class="dropdown-item px-1 px-14"
                            href="#"
                            v-for="(account, indx) in accounts"
                            :key="indx"
                            @click="selectAccountType(account)"
                            >{{ account.text }}</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- <Dropdown :options="cities" optionLabel="label" optionGroupLabel="label" optionGroupChildren="items">
                  <template #optiongroup="slotProps">
                      <div class="p-d-flex p-ai-center country-item">
                          <div>{{slotProps.option.label}}</div>
                      </div>
                  </template>
              </Dropdown> -->
              </div>
            </div>

            <div class="row my-3">
              <div class="col-md-4 text-md-right">
                Account Name <span class="text-danger">*</span>
              </div>
              <div class="col-md-7">
                <input type="text" class="form-control" />
              </div>
            </div>

            <div class="row my-3">
              <div class="col-md-4 text-md-right">Account Currency</div>
              <div class="col-md-7" id="currencySelect">
                <Dropdown
                  :options="filteredCurrencies"
                  optionLabel="name"
                  placeholder="Select account currency"
                  style="width: 100%;"
                  :filter="true"
                />
              </div>
            </div>

            <div class="row my-3">
              <div class="col-md-4 text-md-right">Account ID</div>
              <div class="col-md-7">
                <input type="text" class="form-control" />
              </div>
            </div>

            <div class="row my-3">
              <div class="col-md-4 text-md-right">Description</div>
              <div class="col-md-7">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="5"
                  class="form-control"
                ></textarea>
              </div>
            </div>

            <div class="row my-3">
              <div class="col-md-4 text-md-right"></div>
              <div class="col-md-7"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- END BT -->
  </div>
</template>

<script>
import Dropdown from 'primevue/dropdown';
import { computed, ref } from 'vue';

export default {
    props: [ "transactionalAccounts", "accountTypes", "currencies" ],
    components: { Dropdown },
    setup(props) {
        const selectedAccountType = ref({ });
        const selectAccountType = (account) => {
            selectedAccountType.value = account;
        }
        console.log(props.currencies, "testing");

        const filteredCurrencies = computed(() => {
          if (!props.currencies) return [ ];
          return props.currencies.map(i => {
            return { name: `${i.name} - ${i.country}`, id: i.id}
          });
        })

        return {
            selectAccountType,
            selectedAccountType,
            filteredCurrencies,
        }
    }
};
</script>

<style scoped>

.p-dropdown-items	 {
  width: 100px !important
}
</style>