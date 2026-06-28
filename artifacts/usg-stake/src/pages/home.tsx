import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";

const logoSrc = "/images/logo.png";
const infographic1Src = "/images/info1.jpg";
const infographic2Src = "/images/info2.jpg";

const TOTAL_SUPPLY = 10_000_000;
const COMMISSION_RATE = 0.05;
const POOL_SHARE = 0.025;
const DEV_SHARE = 0.025;

export default function Home() {
  const [isConnected, setIsConnected] = useState(false);
  const [role, setRole] = useState<"dueno" | "usuario">("usuario");
  const [amountInput, setAmountInput] = useState("");
  const [staked, setStaked] = useState(false);

  const amount = parseFloat(amountInput) || 0;
  const commissionUSG = amount * COMMISSION_RATE;
  const poolFundUSG = amount * POOL_SHARE;
  const devShareUSG = amount * DEV_SHARE;
  const netStakedUSG = amount - commissionUSG;

  const handleStake = () => {
    if (amount > 0) setStaked(true);
  };

  return (
    <div className="min-h-screen text-foreground overflow-hidden relative">
      <div className="stars"></div>

      {/* Sticky Header */}
      <header className="sticky top-0 z-50 w-full glass-card border-b border-white/10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logoSrc} alt="USG Logo" className="h-8 w-8 rounded-full" />
            <span className="font-orbitron font-bold text-lg tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-primary to-orange-400">
              UNITY STAKE GLOBAL
            </span>
          </div>
          <nav className="flex items-center gap-6">
            <a href="/" className="text-sm font-medium hover:text-primary transition-colors" data-testid="link-home">
              Inicio
            </a>
            <div className="flex items-center gap-2 border-l border-white/20 pl-6">
              <Label htmlFor="wallet-sim" className="text-xs text-muted-foreground cursor-pointer">
                Simular Conexión
              </Label>
              <Switch
                id="wallet-sim"
                checked={isConnected}
                onCheckedChange={(v) => { setIsConnected(v); if (!v) setStaked(false); }}
                data-testid="toggle-wallet-sim"
              />
            </div>
          </nav>
        </div>
      </header>

      <main className="pb-24">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 px-4 flex flex-col items-center justify-center text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,212,255,0.1)_0%,transparent_50%)] -z-10"></div>

          <div className="relative mb-8 w-48 h-48 sm:w-64 sm:h-64 animate-float">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
            <img
              src={logoSrc}
              alt="Unity Stake Global"
              className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_20px_rgba(255,215,0,0.5)]"
            />
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black mb-4 uppercase tracking-tighter text-glow">
            Unity Stake <span className="text-primary">Global</span>
          </h1>
          <p className="text-xl sm:text-2xl text-secondary font-medium tracking-wide mb-12">
            JUNTOS CONSTRUIMOS EL FUTURO
          </p>

          {/* Stats Bar */}
          <div className="glass-card rounded-2xl p-6 flex flex-wrap justify-center gap-8 md:gap-12 w-full max-w-5xl mx-auto">
            <div className="flex flex-col items-center" data-testid="stat-developers">
              <span className="text-3xl font-bold text-primary">100+</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Desarrolladores</span>
            </div>
            <div className="flex flex-col items-center" data-testid="stat-users">
              <span className="text-3xl font-bold text-primary">100k+</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Personas</span>
            </div>
            <div className="flex flex-col items-center" data-testid="stat-commission">
              <span className="text-3xl font-bold text-secondary">5%</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Comisión Sistema</span>
            </div>
            <div className="flex flex-col items-center" data-testid="stat-supply">
              <span className="text-3xl font-bold text-primary">10M</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Supply USG</span>
            </div>
            <div className="flex flex-col items-center" data-testid="stat-network">
              <span className="text-3xl font-bold text-white">World</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Chain</span>
            </div>
          </div>
        </section>

        {/* Staking Section */}
        <section className="px-4 py-12 relative z-10">
          <div className="max-w-lg mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight font-orbitron">
                Stake <span className="text-primary">Flexible</span>
              </h2>
              <p className="text-muted-foreground text-sm mt-2">
                Fondea el ecosistema en USG — sin montos fijos
              </p>
            </div>

            <Card className="glass-card border-0 p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-secondary/10 rounded-full blur-3xl"></div>

              <div className="relative z-10 flex flex-col gap-7">

                {/* Token Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-black/50 p-1 border border-white/10 flex items-center justify-center shrink-0">
                      <img src={logoSrc} alt="USG" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h3 className="font-orbitron font-bold text-xl leading-none">USG</h3>
                      <div className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                        Unity Global Stake
                        <Badge variant="outline" className="text-[10px] h-4 bg-secondary/10 text-secondary border-secondary/20">
                          World Chain
                        </Badge>
                      </div>
                    </div>
                  </div>
                  {/* APR de Mercado */}
                  <div className="text-right">
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">APR de Mercado</div>
                    <div className="text-xl font-bold text-primary font-orbitron" data-testid="stat-apr">
                      ~ <span className="animate-pulse">??</span> %
                    </div>
                    <div className="text-[10px] text-muted-foreground/60 mt-0.5">Variable · No configurable</div>
                  </div>
                </div>

                {/* Token Info Row */}
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="bg-black/40 rounded-lg p-3 border border-white/5">
                    <div className="text-xs text-muted-foreground mb-1">Supply Total</div>
                    <div className="font-bold text-primary text-sm font-orbitron">
                      {TOTAL_SUPPLY.toLocaleString("es")}
                    </div>
                    <div className="text-[10px] text-muted-foreground">USG</div>
                  </div>
                  <div className="bg-black/40 rounded-lg p-3 border border-white/5">
                    <div className="text-xs text-muted-foreground mb-1">Comisión</div>
                    <div className="font-bold text-secondary text-sm font-orbitron">5%</div>
                    <div className="text-[10px] text-muted-foreground">en USG</div>
                  </div>
                  <div className="bg-black/40 rounded-lg p-3 border border-white/5">
                    <div className="text-xs text-muted-foreground mb-1">Tipo</div>
                    <div className="font-bold text-white text-sm font-orbitron">Flexible</div>
                    <div className="text-[10px] text-muted-foreground">Sin plazo fijo</div>
                  </div>
                </div>

                {/* Role Selector */}
                <div className="space-y-3">
                  <Label className="text-xs uppercase tracking-wider text-muted-foreground">¿Quién fondea?</Label>
                  <RadioGroup
                    value={role}
                    onValueChange={(v) => setRole(v as "dueno" | "usuario")}
                    className="grid grid-cols-2 gap-4"
                  >
                    <Label
                      htmlFor="role-dueno"
                      className={`flex flex-col items-center justify-center rounded-lg border-2 p-4 cursor-pointer transition-all ${
                        role === "dueno" ? "border-primary bg-primary/10" : "border-white/10 hover:bg-white/5"
                      }`}
                      data-testid="role-dueno"
                    >
                      <RadioGroupItem value="dueno" id="role-dueno" className="sr-only" />
                      <span className="font-bold text-sm">Dueño</span>
                      <span className="text-xs text-muted-foreground mt-1 text-center">Aporta al crecimiento y estabilidad</span>
                    </Label>
                    <Label
                      htmlFor="role-usuario"
                      className={`flex flex-col items-center justify-center rounded-lg border-2 p-4 cursor-pointer transition-all ${
                        role === "usuario" ? "border-secondary bg-secondary/10" : "border-white/10 hover:bg-white/5"
                      }`}
                      data-testid="role-usuario"
                    >
                      <RadioGroupItem value="usuario" id="role-usuario" className="sr-only" />
                      <span className="font-bold text-sm">Usuario</span>
                      <span className="text-xs text-muted-foreground mt-1 text-center">Fondea y es parte activa del éxito</span>
                    </Label>
                  </RadioGroup>
                </div>

                {/* Amount Input in USG */}
                <div className="space-y-3">
                  <Label className="text-xs uppercase tracking-wider text-muted-foreground">
                    Cantidad a Fondear (USG)
                  </Label>
                  <div className="relative">
                    <Input
                      type="number"
                      placeholder="0.00"
                      value={amountInput}
                      onChange={(e) => { setAmountInput(e.target.value); setStaked(false); }}
                      className="pr-16 bg-black/40 border-white/10 text-lg font-bold h-14 font-orbitron"
                      min={0}
                      data-testid="input-amount"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-primary font-bold tracking-wider">
                      USG
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Sin monto mínimo fijo — fondea libremente según tu capacidad
                  </p>
                </div>

                {/* Breakdown panel */}
                {amount > 0 && (
                  <div className="bg-black/40 rounded-xl p-5 border border-white/5 space-y-4" data-testid="breakdown-panel">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Monto a fondear</span>
                      <span className="font-bold font-orbitron">{amount.toLocaleString("es", { maximumFractionDigits: 4 })} USG</span>
                    </div>

                    <div className="border-t border-white/5 pt-3 space-y-2">
                      <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                        Comisión sistema · 5% en USG
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-primary shrink-0"></span>
                          <span className="text-sm">Auto-fondeo al Pool</span>
                        </div>
                        <span className="font-bold text-primary">
                          {poolFundUSG.toLocaleString("es", { maximumFractionDigits: 4 })} USG
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-secondary shrink-0"></span>
                          <span className="text-sm">Repartido entre Devs</span>
                        </div>
                        <span className="font-bold text-secondary">
                          {devShareUSG.toLocaleString("es", { maximumFractionDigits: 4 })} USG
                        </span>
                      </div>
                    </div>

                    <div className="border-t border-white/5 pt-3 flex justify-between items-center">
                      <span className="text-sm font-bold">USG neto en stake</span>
                      <span className="text-xl font-black font-orbitron text-glow">
                        {netStakedUSG.toLocaleString("es", { maximumFractionDigits: 4 })} USG
                      </span>
                    </div>

                    <div className="w-full h-2 rounded-full overflow-hidden flex gap-0.5">
                      <div className="h-full bg-gradient-to-r from-primary to-orange-500 rounded-l-full" style={{ width: "95%" }}></div>
                      <div className="h-full bg-primary/60" style={{ width: "2.5%" }}></div>
                      <div className="h-full bg-secondary/60 rounded-r-full" style={{ width: "2.5%" }}></div>
                    </div>
                    <div className="flex justify-between text-[10px] text-muted-foreground/70">
                      <span>95% tu stake</span>
                      <span>2.5% pool</span>
                      <span>2.5% devs</span>
                    </div>
                  </div>
                )}

                {/* CTA Buttons */}
                {!isConnected ? (
                  <Button
                    className="w-full h-14 text-lg font-bold bg-gradient-to-r from-primary to-orange-500 hover:from-primary/90 hover:to-orange-500/90 text-black glow-gold transition-all"
                    onClick={() => setIsConnected(true)}
                    data-testid="button-connect"
                  >
                    CONECTAR WALLET
                  </Button>
                ) : staked ? (
                  <div className="text-center space-y-2" data-testid="stake-success">
                    <div className="text-secondary font-bold text-lg font-orbitron">Stake activo</div>
                    <div className="text-sm text-muted-foreground">
                      {netStakedUSG.toLocaleString("es", { maximumFractionDigits: 4 })} USG fondeados en World Chain
                    </div>
                    <Button
                      variant="outline"
                      className="w-full border-white/20 hover:bg-white/5"
                      onClick={() => { setAmountInput(""); setStaked(false); }}
                      data-testid="button-new-stake"
                    >
                      Nuevo Stake
                    </Button>
                  </div>
                ) : (
                  <Button
                    className="w-full h-14 text-lg font-bold bg-gradient-to-r from-secondary to-blue-600 hover:from-secondary/90 hover:to-blue-600/90 text-white glow-blue transition-all disabled:opacity-40"
                    onClick={handleStake}
                    disabled={amount <= 0}
                    data-testid="button-stake"
                  >
                    HACER STAKE
                  </Button>
                )}

                <p className="text-center text-xs text-muted-foreground/60">
                  El APR es determinado por el mercado en tiempo real y no es configurable por el administrador.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* Infographics Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">El Ecosistema</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="space-y-16 max-w-5xl mx-auto">
            <div className="glass-card p-2 md:p-4 rounded-2xl overflow-hidden shadow-2xl">
              <img src={infographic1Src} alt="Estructura de Comisión y Valores" className="w-full rounded-xl" loading="lazy" />
            </div>
            <div className="glass-card p-2 md:p-4 rounded-2xl overflow-hidden shadow-2xl">
              <img src={infographic2Src} alt="Roadmap y Cálculos" className="w-full rounded-xl" loading="lazy" />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black/50 py-12 relative z-10 text-center">
        <div className="container mx-auto px-4 flex flex-col items-center gap-6">
          <img src={logoSrc} alt="USG" className="w-12 h-12 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all" />
          <p className="font-orbitron text-xl font-bold tracking-widest text-muted-foreground">LA UNIÓN ES NUESTRA FUERZA</p>
          <p className="text-xs text-muted-foreground/50">© {new Date().getFullYear()} Unity Stake Global. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
