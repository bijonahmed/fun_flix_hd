<template>
<div>
    <!--start page wrapper -->
    <div class="page-wrapper">
        <div class="page-content">
            <!--breadcrumb-->
            <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                <div class="ps-3">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb mb-0 p-0">
                            <li class="breadcrumb-item">
                                <router-link to="/" href="javascript:;"><i class="bx bx-home-alt"></i></router-link>
                            </li>
                            <li class="breadcrumb-item" aria-current="page">
                                <router-link to="/ecommarce/product-list">Product List</router-link>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">Product Preview</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <!--end breadcrumb-->
            <!--end row-->
            <div class="row">
                <div class="col-xl-12 mx-auto">
                    <div class="card border-top border-0 border-4 border-info">
                        <div class="card-body">
                            <div class="border p-4 rounded">
                                <div class="card">

                                    <table class="table table-bordered w-100">
                                        <tr>
                                            <td width="21%">Product Name</td>
                                            <td width="1%"><strong>:</strong></td>
                                            <td width="78%">{{ productData.name }}</td>
                                        </tr>
                                        <tr>
                                            <td>Meta Tag Title</td>
                                            <td><strong>:</strong></td>
                                            <td>{{ productData.meta_title }}</td>
                                        </tr>
                                        <tr>
                                            <td>Meta Tag Description</td>
                                            <td><strong>:</strong></td>
                                            <td>{{ productData.meta_description }}</td>
                                        </tr>
                                        <tr>
                                            <td>Download Link</td>
                                            <td><strong>:</strong></td>
                                            <td> <a :href="productData.download_link" target="_blank">{{ productData.download_link }}</a></td>
                                        </tr>
                                        <tr>
                                            <td>Meta Tag Keywords</td>
                                            <td><strong>:</strong></td>
                                            <td>{{ productData.meta_keyword }}</td>
                                        </tr>
                                        <tr>
                                            <td>Product Tags</td>
                                            <td><strong>:</strong></td>
                                            <td>{{ productData.product_tag }}</td>
                                        </tr>

                                        <tr>
                                            <td colspan="3">&nbsp;</td>
                                        </tr>

                                        <tr>
                                            <td>Description</td>
                                            <td><strong>:</strong></td>
                                            <td>
                                                <div class="pro_description marleft"></div>

                                            </td>
                                        </tr>

                                        <tr>
                                            <td>Categories</td>
                                            <td><strong>:</strong></td>
                                            <td>
                                                <div class="output-container">
                                                    <span class="show_categorys"></span>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>Status</td>
                                            <td><strong>:</strong></td>
                                            <td>
                                                <div v-if="productData.status === 0" class="marleft">Draft</div>
                                                <div v-if="productData.status === 1" class="marleft">Publish</div>
                                            </td>
                                        </tr>
                                    </table>
                                </div>

                                <div class="row">

                                    <div class="col-md-3">
                                        <div class="alert alert-primary" role="alert">
                                            <center><small>Thumbnail Images</small></center>
                                            <hr />
                                            <img :src="productImg" alt="N/A" class="img-fluid max-width-100 img-thumbnail" />
                                        </div>
                                    </div>

                                </div>

                                <!-- END -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--end row-->
    </div>
</div>
</template>

<script>
export default {
    head: {
        title: 'Product Preview',
    },
    data() {
        return {
            productData: {
                id: '',
                name: '',
                description: '',
                meta_title: '',
                meta_description: '',
                meta_keyword: '',
                description: '',
                parent_id: 0,
                mobile_view_class: '',
                product_tag: '',
                discount: '',
                sku: '',
                brand_name: '',
                external_link: '',
                price: '',
                unit: '',
                stock_qty: '',
                stock_mini_qty: '',
                stock_status: '',
                free_shopping: '',
                flat_rate_status: '',
                shipping_days: '',
                vat: '',
                vat_status: '',
                tax: '',
                tax_status: '',
                status: '',
                manufacturer: '',
                download_link: '',

            },
            product_cat: [],
            arr_his_val: [],
            selectedItem: [],
            historVarient: [{
                varient_id: '',
                sku: '',
                qty: '',
                price: '',
                file: ''
            }],
            arr_val: [],
            attributeslist: [],
            attrValList: [],
            pro_arr_val_history: [],
            productImg: "",
            productAddImgs: [],
            notifmsg: '',
            errors: {},
        }
    },
    async mounted() {
        this.productDetails();
        this.varientHistory();
        // await this.fetchAttributeList();
    },
    methods: {

        varientHistory() {
            let product_id = this.$route.query.parameter;
            this.$axios.get(`/product/getVarientHistory`, {
                params: {
                    product_id: product_id
                }
            }).then(response => {
                //console.log(`Varient History: ${response.data}`);
                this.historVarient = response.data;
            });
        },

        productDetails() {
            let product_id = this.$route.query.parameter;
            this.$axios.get(`/product/productrow/${product_id}`).then(response => {
                //console.log("product row:" + response.data);
                this.productData.name = response.data.product.name;
                this.productData.description = response.data.product.description;
                this.productData.meta_title = response.data.product.meta_title;
                this.productData.meta_description = response.data.product.meta_description;
                this.productData.meta_keyword = response.data.product.meta_keyword;
                this.productData.product_tag = response.data.product.product_tag;
                this.productData.keyword = response.data.product.keyword;
                this.productData.brand_name = response.data.product.brand_name;
                this.productData.sku = response.data.product.sku;
                this.productData.external_link = response.data.product.external_link;
                $(".pro_description").html(response.data.product.description);
                this.productData.price = response.data.product.price;
                this.productData.unit = response.data.product.unit;
                this.productData.stock_qty = response.data.product.stock_qty;
                this.productData.stock_mini_qty = response.data.product.stock_mini_qty;
                this.productData.discount = response.data.product.discount;
                this.productData.stock_status = response.data.product.stock_status;
                this.productData.free_shopping = response.data.product.free_shopping;
                this.productData.flat_rate_status = response.data.product.flat_rate_status;
                this.productData.shipping_days = response.data.product.shipping_days;
                this.productData.vat = response.data.product.vat;
                this.productData.vat_status = response.data.product.vat_status;
                this.productData.tax = response.data.product.tax;
                this.productData.tax_status = response.data.product.tax_status;
                this.productData.status = response.data.product.status;
                this.productData.manufacturer = response.data.product.manufac_name;
                this.productData.download_link = response.data.product.download_link;
                this.productImg = response.data.productImg;
                this.productAddImgs = response.data.product_imgs;
                $(".show_categorys").html(response.data.product_cat)
                // = response.data.product_cat;
                console.log(`Product category ${response.data.product_cat}`);

            });
        },

    },
}
</script>

<style scoped>
.marleft {
    margin-left: -7px;
}

.output-container {
    white-space: pre-line;
    margin-left: -7px;
}
</style>
