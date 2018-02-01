<pre class="is-paddingless"
    v-hljs>
    <code class="js">
vue-table path="/examples/table/init"
    :custom-render="customRender"
    :filters="filters"
    :intervals="intervals"
    @clicked="clicked"
    @excel="$toastr.info('You just pressed Excel', 'Event')"
    @create="$toastr.success('You just pressed Create', 'Event')"
    @edit="$toastr.warning('You just pressed Edit', 'Event')"
    @destroy="$toastr.error('You just pressed Delete', 'Event')"
    id="example"
vue-table
    </code>
</pre>