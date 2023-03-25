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
            layout: 'fit',
            items: [
                this.createList()
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
                    margin:8,
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
            title:`<div style="color:#545454;width:120px; background-color:#E5E5E5;text-align:center; font-weight:bold;border-radius:10px;padding:4px;">Draft</div>`,
            layout:{
                type:'form'
            },
            items:[
                {
                    xtype:'panel',
                    layout:{
                        type:'hbox'
                    },
                    items:[
                        {
                            xtype:'combobox',
                            store:storeCombobox,
                            labelAlign:'top',
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
                            margin:8,
                            padding:8,
                            value:'John Smith ',
                            
                        },
                        {
                            xtype:'textfield',
                            labelAlign:'top',
                            fieldLabel:'Quotation No',
                            margin:8,
                            padding:8,
                            value:'ABC-CDE 21',
                            
                        },
                        {
                            xtype:'combobox',
                            store:storeCombobox,
                            labelAlign:'top',
                            fieldLabel:'Invoice To',
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
                    layout:{
                        type:'hbox'
                    },
                    items:[
                        
                        {
                            xtype:'textfield',
                            labelAlign:'top',
                            width:'19%',
                            fieldLabel:'Vendor Address',
                            margin:8,
                            padding:8,
                            value:'ABC-CDE 21',
                            
                        },
                    ]
                }
            ]
        })
        return form

    }
});
