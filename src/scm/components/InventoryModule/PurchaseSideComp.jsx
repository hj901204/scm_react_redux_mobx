import React, { Component } from 'react'
import Sidebar from '../../../base/components/SidebarWrapComp';
import MTable from '../../../base/components/TableComp';
import {Spin} from '../../../base/components/AntdComp'
let columns = [{
        title: '物料编码',
        dataIndex: 'materialCode',
        key: 'materialCode',
    }, {
        title: '物料名称',
        dataIndex: 'materialName',
        key: 'materialName',
    }, {
        title: '规格',
        dataIndex: 'materialSpec',
        key: 'materialSpec',
    },{
        title: '型号',
        dataIndex: 'materialModel',
        key: 'materialModel',
    },{
        title: '计划数',
        dataIndex: 'orderNumber',
        key: 'orderNumber',
     },{
        title: '基本单位',
        dataIndex: 'measureUnitName',
        key: 'measureUnitName',
    }
   
];
class PurchaseSideComp extends Component {
    constructor(props, context) {
        super(props, context)
    }
closeSideBar=()=>{
    this.props.openSideBar(false);   
}
closeSideBarSub=()=>{
     this.props.openSideBarSub(false); 
}
    render(){ 
        let { newState, ...props} = this.props;
        let info=newState.openSideBarList||'';
        return (
                 <div className="purchase-sidebar-content">
                     <Sidebar className="purchase-sideber" maskClosable={true} side_visible={newState.side_visible}  onClose={this.closeSideBar}>
                       <Spin spinning={this.props.newState.openSideBarLoading}>
                         <div className="purchase-order-detail">
                             <h3>采购订单详情界面 </h3>
                             <span className="purchase-choose-x" onClick={this.closeSideBar}>X</span>
                         </div>
                         <div className="bold-line-ground"></div>
                         <div className="sidebar-content">
                             <div className="sidbar-base-info">
                                <h3>常规信息</h3>
                                <div className="sidbar-base-item">
                                    <p><span className="sidbar-base-order-name">单据号：</span><span>{info.orderCode}</span></p>
                                    <p><span>单据类型：</span><span>{this.props.newState.openSideBarLoading==true?'':'采购订单'}</span></p>
                                </div>
                             </div>
                             <div className="sidebar-normal-info">
                                <h3>供应商信息</h3>
                                    <div className="sidebar-normal-item">
                                    <p>供应商：<span>{info.supplierName}</span></p>
                                    <p>电话：<span>{info.contactsTel}</span></p>
                                    <p>联系人：<span>{info.contactsName}</span></p>
                                    <p className="details-remark">备注：<span className="details-remark-side">{info.remarks}</span></p>
                                </div>
                             </div>
                        </div>
                        <div className="purchase-order-base-info">
                         <h3>订单信息</h3>
                        </div>
                        <MTable 
                            cols={columns}
                            rowKey = {"id"}
                            dataSource={newState.dataSourceSide}  
                            loading={newState.tableLoading}
                            {...props} 
                        />
                        </Spin>
                     </Sidebar>
                      <Sidebar className="purchase-sideber" maskClosable={true} side_visible={newState.side_visible_sub}  onClose={this.closeSideBarSub}>
                          <Spin spinning={this.props.newState.openSideBarSubLoading}>
                            <div className="purchase-suplier-detial">
                            <h3>供应商详情界面</h3>
                            <span className="purchase-choose-x" onClick={this.closeSideBarSub}>X</span>
                            </div>
                            <div className="bold-line-ground bold-line-ground-change"></div>
                            <div className="purchase-suplier-detial-list">
                                <p><span className="suplier-style">供应商编码：</span><span>{newState.suplierData.bpCode}</span></p>
                                <p><span className="suplier-style">供应商名称：</span><span>{newState.suplierData.bpName}</span></p>
                                <p><span className="suplier-style">联系人：</span><span>{newState.suplierData.linkman}</span></p>
                                <p><span className="suplier-style">联系电话：</span><span>{newState.suplierData.linkmanTel}</span></p>
                                {/*<p><span className="suplier-style">地址：</span><span></span></p>*/}
                            </div>
                          </Spin>
                      </Sidebar>
                 </div>  
                        
                )
    }
}

export default PurchaseSideComp



