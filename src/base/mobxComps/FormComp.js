import React, { Component } from "react";
import valid from '../consts/ValidateList';
let { observer } = mobxReact;

@observer
export default class FormComp extends Component {
    get __form() {
        return this.props.form;
    }
    getFD(id, opt = {}, scope = this.__form) {
        if (opt.rules) opt.rules = opt.rules.map((item, i) => valid(item));

        return this.__form.getFieldDecorator
            .call(scope, id, opt);
    }
    get getFdv() {
        return this.__form.getFieldValue;
    }
    get getFdsv() {
        return this.__form.getFieldsValue;
    }
    get setFdv() {
        return this.__form.setFieldsValue;
    }
    get validateFds() {
        return this.__form.validateFields;
    }
    get resetFds() {
        return this.__form.resetFields;
    }
}