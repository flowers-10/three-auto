# Charts

ThreeAuto chart components, you only need to pass configuration options to ThreeAuto, and it will automatically generate the appearance you want.
Currently supports curves, earth, grids, maps, and pie charts.

## Series
### Constructor
This constructor creates a new Series.

```typescript
Series(option: Partial<SeriesConfig>, instance: ThreeInstance);
```
:::tip Note
ThreeAuto's constructor already has built-in Series configuration options. You don't need to declare it actively, just pass it in ThreeAuto's configuration options.
:::