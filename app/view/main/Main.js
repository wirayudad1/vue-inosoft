/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Testing.view.main.Main', {
    extend: 'Ext.panel.Panel',
    initComponent () {
        let me=this;
        Ext.apply(this, {
            layout: 'vbox',
            items: [
                this.createList(),
                this.createGrid()
            ],
            // bbar:[
            //     '->',
            //
            // ]
           
        })

        this.callParent(arguments);
    },
    createList(){
        let me=this
        let storeCombobox= Ext.create('Ext.data.Store', {
            fields:['id','name'],
            data : [
                {id: '1',    name: 'Tracking Instruction'},
                {id: '2',    name: 'Logistic Instruction'},

            ]
        });
        let panel=Ext.create('Ext.panel.Panel',{
            title:`<b style="color:#545454">3rd Party Instruction</b>`,
            width: '100%',
            layout:{
                type:'hbox'
            },
            cls:'headerPanel',
            items:[
                // {
                //     xtype:'panel',
                //     layout:{
                //         type:'vbox'
                //     },
                //     items:[
                //         {

                //         }
                //     ]
                // },
                {
                    xtype:'combobox',
                    store:storeCombobox,
                    fieldStyle: 'background-color: #F1F1F1;padding:8px;',
                    cls:'comboArrow',
                    margin:8,
                    width:'10%',
                    padding:8,
                    value:'2',
                    displayField:'name',
                    valueField:'id'
                    
                },
                me.createForm()
            ]
        })
        return panel
    },
    createForm(){
        let me=this;
        let storeCombobox= Ext.create('Ext.data.Store', {
            fields:['id','name'],
            data : [
                {id: '1',    name: 'Tracking Instruction'},
                {id: '2',    name: 'Logistic Instruction'},

            ]
        });
        let form=Ext.create('Ext.form.Panel',{
            title:`<div style="color:#545454;width:160px; background-color:#E5E5E5;text-align:center; font-weight:bold;border-radius:10px;padding:4px;">Draft</div>`,
            width:'90%',
            layout:{
                type:'form'
            },
            items:[
                {
                    xtype:'panel',
                    layout:{
                        type:'hbox',
                    },
                    items:[
                        {
                            xtype:'panel',
                            width:'80%',
                            style:{
                                'border-right':'1px dotted',
                            },  
                            layout:{
                                type:'hbox'
                            },
                            items:[
                                {
                                    xtype:'combobox',
                                    store:storeCombobox,
                                    labelAlign:'top',
                                    fieldStyle: 'background-color: #F1F1F1;padding:8px;',
                                    cls:'comboArrow',
                                    width:'25%',
                                    fieldLabel:'Assigned Vendor',
                                    margin:8,
                                    padding:8,
                                    value:'2',
                                    displayField:'name',
                                    valueField:'id'
                                    
                                },
                                {
                                    xtype:'textfield',
                                    labelAlign:'top',
                                    fieldLabel:'Attention Of',
                                    fieldStyle: 'background-color: #F1F1F1;padding:8px;',
                                    width:'25%',
                                    margin:8,
                                    padding:8,
                                    value:'John Smith ',
                                    
                                },
                                {
                                    xtype:'textfield',
                                    labelAlign:'top',
                                    fieldStyle: 'background-color: #F1F1F1;padding:8px;',
                                    width:'25%',
                                    fieldLabel:'Quotation No',
                                    margin:8,
                                    padding:8,
                                    value:'ABC-CDE 21',
                                    
                                },
                                {
                                    xtype:'combobox',
                                    store:storeCombobox,
                                    labelAlign:'top',
                                    fieldStyle: 'background-color: #F1F1F1;padding:8px;',
                                    cls:'comboArrow',
                                    fieldLabel:'Invoice To',
                                    width:'25%',
                                    margin:8,
                                    padding:8,
                                    value:'2',
                                    displayField:'name',
                                    valueField:'id'
                                    
                                },
                            ]
                        },
                        {
                            xtype:'panel',
                            width:'20%',
                            layout:{
                                type:'hbox'
                            },
                            items:[
                                {
                                    xtype:'combobox',
                                    store:storeCombobox,
                                    fieldStyle: 'background-color: #F1F1F1;padding:8px;',
                                    cls:'comboArrow',
                                    labelAlign:'top',
                                    width:'100%',
                                    fieldLabel:'Customer Contract',
                                    margin:8,
                                    padding:8,
                                    value:'2',
                                    displayField:'name',
                                    valueField:'id'
                                    
                                },
                            ]
                        }
                    ]
                },
                {
                    xtype:'panel',
                    layout:{
                        type:'hbox'
                    },
                    items:[
                        {
                            xtype:'panel',
                            width:'80%',
                            style:{
                                'border-right':'1px dotted',
                            },  
                            layout:{
                                type:'hbox'
                            },
                            items:[
                                
                                {
                                    xtype:'textfield',
                                    labelAlign:'top',
                                    fieldLabel:'Vendor Address',
                                    fieldStyle: 'background-color: #F1F1F1;padding:8px;',
                                    width:'100%',
                                    margin:8,
                                    padding:8,
                                    value:'ABC-CDE 21',
                                    
                                },
                              
                            ]
                        },
                        {
                            xtype:'panel',
                            width:'20%',
                            layout:{
                                type:'hbox'
                            },
                            items:[
                                {
                                    xtype:'combobox',
                                    store:storeCombobox,
                                    labelAlign:'top',
                                    width:'100%',
                                    fieldLabel:'Customer PO No.',
                                    fieldStyle: 'background-color: #F1F1F1;padding:8px;',
                                    cls:'comboArrow',
                                    margin:8,
                                    padding:8,
                                    value:'2',
                                    displayField:'name',
                                    valueField:'id'
                                    
                                },
                            ]
                        }
                    ]
                },
             
            ]
        })
        return form

    },
    createGrid(){
        let me=this;
        let storeGrid= Ext.create('Ext.data.Store', {
            fields:['description','qry','uom','unit_pr','discount','VAT_1',''],
            data : [
                {description: 'Description',    qty: '1'},
                {description: 'Description',    qty: '2'},

            ]
        });
        let columns=[
            {
                text:'Description',
                editor: me.createText(),              
                dataIndex:'description',
                width:130,
                renderer(value){
                    return `<div style="color:#545454;background-color:#E5E5E5;text-align:center;border-radius:3px;padding:4px;">${value}</div>`
                }
            },
            {
                text:'Qty',
                width:'5%',
            },
            {
                text:'UOM',
                width:'6%',
            },
            {
                text:'Unit Price',
                width:'8%',
            },
        
            {
                text:'Discount (%)',
                width:'10%',
            },
            {
                text:'VAT (%)',
                width:'5%',
            },
            {
                text:'',
                width:'4%',
            },
            {
                text:'Currency',
                width:'10%',
            },
            {
                text:'VAT Amount',
                width:'10%',
            },
            {
                text:'Sub Total',
                width:'10%',
            },
            {
                text:'Total',
                width:'6%',
            },
            {
                text:'Charge To',
                width:'10%',
            },
            {
                text:'',
                width:'5%',
            },

        ]
        let grid=Ext.create('Ext.grid.Panel',{
            width:'100%',
            cls:'gridColumn',
            columns:columns,
            store:storeGrid,
            plugins: {
                ptype: 'cellediting',
                clicksToEdit: 1,
              
            },
            
        })
        return grid
    },
    createText(){
        let textfield=Ext.create('Ext.form.field.Text',{
            fieldStyle: 'background-color: #F1F1F1;margin:0px;',
            emptyText:'Description',
        })
        return textfield
    }
});
