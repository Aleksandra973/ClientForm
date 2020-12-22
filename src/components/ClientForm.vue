<template>
  <div class="form">
    <form>
      <div class="form-block">
        <div class="form-group" :class="{ 'form-group__error': $v.lastName.$error }">
          <label class="required" for="lastName">Фамилия</label>
          <input class="form__control" id="lastName" name="lastName" v-model="$v.lastName.$model"/>
          <p class="error" v-if="!$v.lastName.required && $v.lastName.$dirty">
            <span>Пожалуйста, заполните данное поле</span>
          </p>
        </div>
        <div class="form-group" :class="{ 'form-group__error': $v.firstName.$error }">
          <label class="required" for="firstName">Имя</label>
          <input class="form__control" id="firstName" name="firstName" v-model="$v.firstName.$model">
          <p class="error" v-if="!$v.firstName.required && $v.firstName.$dirty">
            <span>Пожалуйста, заполните данное поле</span>
          </p>
        </div>
        <div class="form-group">
          <label for="middleName">Отчество</label>
          <input class="form__control" id="middleName" name="middleName" v-model="middleName">
        </div>
        <div class="form-group" :class="{ 'form-group__error': $v.dateOfBirth.$error }">
          <label class="required" for="dateOfBirth">Дата рождения</label>
          <input class="form__control" type="date" id="dateOfBirth" name="dateOfBirth" v-model="$v.dateOfBirth.$model" value=" ">
          <p class="error" v-if="!$v.dateOfBirth.required && $v.dateOfBirth.$dirty">
            <span>Пожалуйста, заполните данное поле</span>
          </p>
        </div>
        <div class="form-group" :class="{ 'form-group__error': $v.phoneNumber.$error }">
          <label class="required" for="phoneNumber">Номер телефона</label>
          <input class="form__control" id="phoneNumber" name="phoneNumber" v-model="$v.phoneNumber.$model">
          <p class="error" v-if="!$v.phoneNumber.required && $v.phoneNumber.$dirty">
            <span>Пожалуйста, заполните данное поле</span>
          </p>
          <p class="error" v-if="$v.phoneNumber.$invalid && $v.phoneNumber.$dirty">
            <span>Пожалуйста, введите 11 цифр, начиная с 7</span>
          </p>
        </div>
        <div class="form__checkbox">
          <p class="label">Пол</p>
          <label class="radio radio-gradient">
          </label>
          <label  for="male">м</label>
          <input type="radio" id="male" name="male" value="male" v-model="sex">
          <label for="female">ж</label>
          <input  type="radio" id="female" name="female" value="female" v-model="sex">
        </div>
        <div class="form__checkbox">
          <p class="required label">Группа клиентов</p>

          <input type="checkbox" id="vip" name="vip" value="VIP" v-model="clientGroup">
          <label  for="vip">VIP</label>
          <input  type="checkbox" id="problem" name="problem" value="Проблемные" v-model="clientGroup">
          <label for="problem">Проблемные</label>
          <input  type="checkbox" id="oms" name="oms" value="ОМС" v-model="clientGroup">
          <label for="oms">ОМС</label>
        </div>
        <div>
          <p for="doctor">Лечащий врач</p>
          <select class="form__control" id="doctor" name="doctor" v-model="doctor">
            <option value="1">Иванов</option>
            <option value="2">Захаров</option>
            <option value="3">Чернышева</option>
          </select>
        </div>
        <div>
          <label for="sms">Не отправлять смс</label>
          <input type="checkbox" id="sms" name="sms" v-model="sendSms">
        </div>
      </div>
      <div class="form-block">
        <div class="form-group">
          <label for="index">Индекс</label>
          <input class="form__control" id="index" name="index" v-model="index">
        </div>
        <div class="form-group">
          <label for="country">Страна</label>
          <input class="form__control" id="country" name="country" v-model="country">
        </div>
        <div class="form-group">
          <label for="region">Область</label>
          <input class="form__control" id="region" name="region" v-model="region">
        </div>
        <div class="form-group">
          <label class="required" for="city">Город</label>
          <input class="form__control" id="city" name="city" v-model="city">
        </div>
        <div class="form-group">
          <label for="street">Улица</label>
          <input class="form__control" id="street" name="street" v-model="street">
        </div>
        <div class="form-group">
          <label for="house">Дом</label>
          <input class="form__control" id="house" name="house" v-model="house">
        </div>
      </div>
      <div class="form-block">
        <div class="form-group">
          <label class="required" for="documentType">Тип документа</label>
          <select class="form__control" name="documentType" id="documentType" v-model="documentType">
            <option value="passport">Паспорт</option>
            <option value="birthCertificate">Свидетельство о рождении</option>
            <option value="driverLicense">Водительское удостоверение</option>
          </select>
        </div>
        <div class="form-group">
          <label for="serial">Серия</label>
          <input class="form__control" id="serial" name="serial" v-model="serial">
        </div>
        <div class="form-group">
          <label for="number">Номер</label>
          <input class="form__control" id="number" name="number" v-model="number">
        </div>
        <div class="form-group">
          <label for="authority">Кем выдан</label>
          <input class="form__control" id="authority" name="authority" v-model="authority">
        </div>
        <div class="form-group">
          <label class="required" for="issueDate">Дата выдачи</label>
          <input class="form__control" id="issueDate" name="issueDate" v-model="issueDate">
        </div>

        <button type="button" class="form__control btn-success">Отправить</button>
      </div>
    </form>
  </div>
</template>

<script>
import {required} from 'vuelidate/lib/validators'

export default {
  name: 'ClientForm',
  data() {
    return{
      firstName: '',
      lastName: '',
      middleName: '',
      dateOfBirth: '',
      sex: '',
      phoneNumber: '',
      clientGroup: [],
      doctor: '',
      sendSms: false,
      index: null,
      country: '',
      region: '',
      city: '',
      street: '',
      house: null,
      documentType: '',
      serial: null,
      number: null,
      authority: '',
      issueDate: ''
    }
  },
  validations: {
    lastName: {
      required
    },
    firstName: {
      required
    },
    dateOfBirth: {
      required
    },
    phoneNumber: {
      required,
      validFormat: val =>  /^\+?7(\d{10})$/.test(val)
    }
  },

}

</script>