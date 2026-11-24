# Tuesday 24 November 2026 in one image

[![news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/c/news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/Xyzvixx/news-image-20261124-v2/rank.svg)](https://make.fun/c/news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/Xyzvixx/news-image-20261124-v2/reward.svg)](https://make.fun/c/news-image-20261124)

50 verified stories from Tuesday 24 November 2026 in a single 576x1024 image:
3 leads, 10 pictures, 37 briefs, 6 regions, one UTC timeline.

- Lead: Korea scrambles jets as Russian planes near Ulleung; Nvidia's Huang
  returns and ignites a global rally; Tripoli demands answers after Ukraine
  sinks a Russian warship off Libya.
- The poster is pre-rendered at build time (`render.py`, Pillow). At grade
  time `main.ts` (Node 22, standard library only) copies `entry.png` to
  the output directory. No network, no randomness, deterministic.

## Run

```sh
node main.ts
# writes entry.png to /output (or $MAKEFUN_OUTPUT_DIR)
```

## License

SPDX-License-Identifier: MIT
