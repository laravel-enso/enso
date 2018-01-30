<pre class="is-paddingless"
    v-hljs>
    <code class="js">
interval-filter
    title="Salary"
    type="number"
    :min="intervals.examples.salary.min"
    @update-min="intervals.examples.salary.min = $event"
    :max="intervals.examples.salary.max"
    @update-max="intervals.examples.salary.max = $event"
interval-filter
    </code>
</pre>