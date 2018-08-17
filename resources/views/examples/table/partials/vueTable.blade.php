<pre class="is-paddingless"
    v-hljs>
    <code class="js">
vue-table class="is-raised is-rounded"
    path="/examples/table/init"
    :filters="filters"
    :intervals="intervals"
    @clicked="clicked"
    @excel="$toastr.info('You just pressed Excel', 'Event')"
    @create="$toastr.success('You just pressed Create', 'Event')"
    @edit="$toastr.warning('You just pressed Edit', 'Event')"
    @destroy="$toastr.error('You just pressed Delete', 'Event')"
    id="example"
    <span slot="project"
        slot-scope="props"
        :class="[
            'tag is-table-tag',
            { 'is-success': props.row.project === 'Enso SPA' },
            { 'is-warning': props.row.project === 'Webshop' },
            { 'is-info': props.row.project === 'AdminLTE' }
        ]">
        @{{ props.row.project }}
    </span>
vue-table
    </code>
</pre>